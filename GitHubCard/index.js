import axios from 'axios'



/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [   'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const gitHubURL = `https://api.github.com/users/nextweekscode`	
	const entryPoint = document.querySelector('.cards')
	function makeCard(dataObj) {
	const card = document.createElement('div')
	card.className = 'card'
	entryPoint.appendChild(card)
	const image = document.createElement('img')
	image.src = dataObj.data.avatar_url
	card.appendChild(image)
	const cardInfo = document.createElement('div')
	cardInfo.className = 'card-info'
	card.appendChild(cardInfo)
	const name = document.createElement('h3')
	name.className = "name"
	name.textContent = dataObj.data.name
	cardInfo.appendChild(name)
	const gitHubName = document.createElement('p')
	gitHubName.className = "username"
	gitHubName.textContent = dataObj.data.login
	cardInfo.appendChild(gitHubName)
	const location = document.createElement('p')
	location.textContent = `Location: ${dataObj.data.location}`
	cardInfo.appendChild(location)
	const profile = document.createElement('p')
	profile.textContent = "Profile:"
	cardInfo.appendChild(profile)
	const profileLink = document.createElement('a')
	profileLink.href = dataObj.data.html_url
	profileLink.textContent = dataObj.data.html_url
	profile.appendChild(profileLink)
	const followers = document.createElement('p')
	followers.textContent = `Followers: ${dataObj.data.followers}`
	cardInfo.appendChild(followers)
	const following = document.createElement('p')
	following.textContent = `Following: ${dataObj.data.following}`
	cardInfo.appendChild(following)
	const userBio = document.createElement('p')
	userBio.textContent = `Bio: ${dataObj.data.bio}`
	cardInfo.appendChild(userBio)
	return card
	}
	axios.get(gitHubURL)
	.then(res => {
	entryPoint.appendChild(makeCard(res))
	
  })
  .then(response => {
    followersArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) =>{
    entryPoint.appendChild(makeCard(res))
    
    } )
    .catch(() => {
    console.log('error')
    })
    })

  })
	.catch(()=>{
	console.log('error')
	})
