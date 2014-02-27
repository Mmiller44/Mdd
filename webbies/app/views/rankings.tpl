<div class="row">
	<div class="col-xs-10 col-xs-offset-1 ranking">
		<h3>Rankings</h3>
		<h4>Name</h4>
		<h5 class="floatRight">Score</h5>
	
		<div class="myClearFix">
			<div class="ranking_block" ng-repeat="user in scores | orderBy:'score':false">
				<p class="name">{{ user.name }}</p>
				<p class="floatRight">{{ user.score }}</p>
			</div>
		</div>
	</div>
</div>