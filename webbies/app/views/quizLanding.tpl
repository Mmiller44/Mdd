<div class="landing">
	<h2>Front-End Quiz</h2>
	<p>This week's challenge quiz will be on front-end development. With each new quiz the rankings are reset, so check back weekly to stay on top of the leaderboards.</p>
</div>
</div>
<a class="btn btn-block btn-social button" href="#/quiz/{{$root.user.currentNumber}}" ng-hide="{{$root.user.currentNumber > 1}}">Continue Quiz!</a>
<a class="btn btn-block btn-social button" href="#/quiz/{{$root.user.currentNumber}}" ng-show="{{$root.user.currentNumber == 1}}">Start the Quiz!</a>