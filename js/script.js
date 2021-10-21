tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

playerScore = document.getElementById('player-score');
computerScore = document.getElementById('computer-score');
roundWinner = document.getElementById('round-winner');
roundSummary = document.getElementById('round-summary');

choices = ['Rock', 'Paper', 'Scissors'];
player = 0;
computer = 0;

function updateScore(player, computer) {
	player = player;
	computer = computer;
	playerScore.innerHTML = player;
	computerScore.innerHTML = computer;
}

function announceWinner(winner, playerChoice, computerChoice) {
	roundWinner.innerHTML = winner;
	roundSummary.innerHTML = '<div class="row"><div class="col-6"><p class="text-primary"><b>Player chose:</b></p>' + playerChoice + '</div><div class="col-6"><p class="text-danger"><b>Computer chose:</b></p>' + computerChoice + '</div></div>';
	new bootstrap.Modal(document.getElementById('winner-announcement')).show();
}

function playRound(playerChoice) {
	computerChoice = choices[Math.floor(Math.random() * 3)];
	
	if (playerChoice == 'Rock' && computerChoice == 'Rock' || playerChoice == 'Paper' && computerChoice == 'Paper' || playerChoice == 'Scissors' && computerChoice == 'Scissors') {
		announceWinner('It\'s a tie!', playerChoice, computerChoice);
	}
	if (playerChoice == 'Rock' && computerChoice == 'Scissors' || playerChoice == 'Paper' && computerChoice == 'Rock' || playerChoice == 'Scissors' && computerChoice == 'Paper') {
		announceWinner('Player won!', playerChoice, computerChoice);
		updateScore(++player, computer);
	}
	if (playerChoice == 'Rock' && computerChoice == 'Paper' || playerChoice == 'Paper' && computerChoice == 'Scissors' || playerChoice == 'Scissors' && computerChoice == 'Rock') {
		announceWinner('Computer won!', playerChoice, computerChoice);
		updateScore(player, ++computer);
	}
}