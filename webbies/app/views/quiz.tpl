<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2">
				<div id="progressbar">
				  <div ng-style="setProgress()"></div>
				</div>
			</div>

			<div class="col-xs-12 col-sm-8 col-sm-offset-2">
				<p class="question">{{ firequiz.text}}</p>
			</div>
		</div> <!-- Closing Row -->

		<div class="row answerBlock">
			<ul class="list-group">
			  <a ng-href="#/quiz/{{firequiz.next}}" ng-click="saveAnswer('a')"><li class="list-group-item item1">{{ firequiz.option1}}</li></a>
			  <a ng-href="#/quiz/{{firequiz.next}}" ng-click="saveAnswer('b')"><li class="list-group-item item2">{{ firequiz.option2}}</li></a>
			  <a ng-href="#/quiz/{{firequiz.next}}" ng-click="saveAnswer('c')"><li class="list-group-item item3">{{ firequiz.option3}}</li></a>
			  <a ng-href="#quiz/{{firequiz.next}}" ng-click="saveAnswer('d')"><li class="list-group-item item4">{{ firequiz.option4}}</li></a>
			</ul>
		</div>