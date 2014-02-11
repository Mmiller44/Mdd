<div class="col-md-12" id="admin">
	<input type="text" ng-model="remoteData.title" placeholder="Title" />
	<input type="text" ng-model="remoteData.imgURL" placeholder="Image URL"/>
	<textarea ng-model="remoteData.desc" placeholder="Short Project Description"></textarea>
	<textarea ng-model="remoteData.fullDesc" placeholder="Full Project Description"></textarea>
	<button class="save_button" ng-click="saveData()">Save</button>
</div>