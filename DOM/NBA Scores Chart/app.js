const warriorGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 85,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 126,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 95,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 94,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 98,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 86,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 115,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 101,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false
    }
}
];

const ul = document.createElement('ul');
for (let game of warriorGames) {
    const { awayTeam, homeTeam } = game;
    const gameLi = document.createElement('li');
    const { team: aTeam, points: aPoints } = awayTeam;
    const { team: hTeam, points: hPoints } = homeTeam;
    const teams = `${aTeam} @ ${hTeam}`;
    let scores;
    aPoints > hPoints ? scores = `<b>${aPoints}</b> ${hPoints}` : scores = `${aPoints} <b>${hPoints}</b>`;
    const warrior = aTeam === 'Golden State' ? awayTeam : homeTeam;
    gameLi.classList.add(warrior.isWinner ? 'win' : 'lose');
    gameLi.innerHTML = `${teams} - ${scores}`;
    ul.appendChild(gameLi);
}
document.body.appendChild(ul);