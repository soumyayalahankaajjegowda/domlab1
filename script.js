const liTags = document.querySelectorAll('#teamList li')
const summary = document.querySelector('#summary')

console.log(liTags)

let teams = []

liTags.forEach(li => {
    let teamName = li.textContent.split(':')[0];
    let additionalInfo = li.textContent.split(':')[1].split(' ')
    
    let wins = Number(additionalInfo[1]) //  '20'
    let losses = Number(additionalInfo[3]) // '19' 

    let totalGames = wins + losses // '20' + '19' = '2019'
    let winningPerc = Math.round((wins / totalGames) * 100)

    if (winningPerc >= 50) {
        li.style.color = 'green'
    } else {
        li.style.color = 'red'
    }

    let team = {
        name: teamName,
        percentage: winningPerc,
        mascot: '🐼'
    }

    teams.push(team)

    console.log(li.style)

    console.log(winningPerc) // 25 Wins, 5 Losses
})

teams.sort((teamA, teamB) => teamB.percentage - teamA.percentage)
console.log(teams)

let bestTeam = teams[0]
let worstTeam = teams[teams.length - 1] // .at(-1)

console.log(bestTeam)

summary.textContent = `The winning team is 
${bestTeam.name} with a percentage of
 ${bestTeam.percentage} and the losing team is
  ${worstTeam.name} with a percentage of
   ${worstTeam.percentage}. 
   Mascot:${bestTeam.mascot}`
