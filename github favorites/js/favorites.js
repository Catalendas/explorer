export class GitHubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(({avatar_url, html_url, name, login, public_repos, followers}) => ({
        avatar_url, 
        html_url, 
        name, 
        login, 
        public_repos, 
        followers
      }))
  }
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.Load()
  }

  Load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites")) || []
  }

  save() {
    localStorage.setItem("@github-favorites", JSON.stringify(this.entries))
  }

  async add(username) {
    try {

      const userExists = this.entries.find(entry => entry.login.toLowerCase() == username.toLowerCase())

      if(userExists) {
        throw new Error("Usuario já existe")
      }

      const user = await GitHubUser.search(username)

      if(user.login === undefined) {
        throw new Error("Usuario não encontrado")
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()

    } catch (err) {
      alert(err.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entries
      .filter(entry => entry.login !== user.login)

      this.entries = filteredEntries
      this.update()
      this.save()
    }
    
  }
  
  export class FavoriteView extends Favorites {
    constructor(root) {
      super(root)
      
      this.tbody = this.root.querySelector("table tbody")
      this.update()
      this.onadd()

  }

  onadd() {
    const addbutton = this.root.querySelector('.search button')

    addbutton.onclick = () => {
      const { value } = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createRow(
        user.avatar_url, 
        user.html_url, 
        user.name, 
        user.login, 
        user.public_repos, 
        user.followers
      )

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm("Deseja realmente deletar essa linha?")
        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
   }

  createRow(avatar_url, html_url, name, login, public_repos, followers) {

    const tr = document.createElement("tr")

    tr.innerHTML = `
    <td class="user">
      <img src=${avatar_url}>
      <a href=${html_url} target="_blank">
        <p>${name}</p>
        <span>${login}</span>
      </a>
    </td>
    <td class="repositories">${public_repos}</td>
    <td class="followers">${followers}</td>
    <td>
      <button class="remove">Remover</button>
    </td> 
    `

    return tr
  }

  removeAllTr() {

    this.tbody.querySelectorAll("tr")
      .forEach((tr) => {
        tr.remove()
      })

  }
}