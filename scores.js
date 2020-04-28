function highScores() {
    const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

highScores.sort(function(a, b) {
    return b.score - a.score;
});
highScores.forEach(function(score) {
    const li = document.createElement('li');
    li.textContent = score.userInitials + " " + score.score;

    var ol = document.getElementById('highScores');
    ol.appendChild(li);
});
}
function clearScore() {
    window.localStorage.removeItem(highScores);
    window.location.reload
}
document.getElementById('clear').onclick = clearScore;
highScores();