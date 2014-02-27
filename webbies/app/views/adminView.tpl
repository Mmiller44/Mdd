<div class="row clearfix">
		<div class="col-md-12 column">
		</div>
	</div>
	<div class="row clearfix">
		<div class="col-md-4 column">
			<form role="form">
				<div class="form-group">
					 <label for="question">Question</label><input type="text" class="form-control" id="question" placeholder="What is the question?" ng-model="question"/>
				</div>
				<div class="form-group">
					 <label for="optionA">A</label><input type="text" class="form-control" id="optionA" placeholder="Option A" ng-model="optionA" />
				</div>
				<div class="form-group">
					 <label for="optionB">B</label><input type="text" class="form-control" id="optionB" placeholder="Option B" ng-model="optionB"/>
				</div>				
				<div class="form-group">
					 <label for="optionC">C</label><input type="text" class="form-control" id="optionC" placeholder="Option C" ng-model="optionC"/>
				</div>				
				<div class="form-group">
					 <label for="optionD">D</label><input type="text" class="form-control" id="optionD" placeholder="Option D" ng-model="optionD"/>
				</div>

				<div class="form-group">
					 <label for="correctAnswer">Correct Answer</label><input type="text" class="form-control" placeholder="Correct Answer" id="correctAnswer" ng-model="answer"/>
				</div>

				<div class="checkbox">
					 <label><input type="checkbox" ng-model="last_question" />Last Question?</label>
				</div>
				
				<button type="submit" ng-click="save()" class="btn btn-default">Submit</button>
			</form>
		</div>

	</div>
</div>