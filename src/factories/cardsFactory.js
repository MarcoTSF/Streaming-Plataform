import CardsController from "./../controllers/cardsController.js"
import CardsView from "./../views/cardsView.js"
import CardsService from "./../services/cardsService.js"
const [rootPath] = window.location.href.split('/')
const factory = {
  async initalize() {
    return CardsController.initialize({
      view: new CardsView(),
      service: new CardsService({ dbUrl: `${rootPath}/src/factories/database.json` })
    })
  }
}

export default factory