<div ng-controller="MainCtrl">
	<article class="col-sm-12 col-md-6" ng-repeat="($id, project) in projects" >
		<img ng-src="{{ project.imgURL }}" width="100" height="100">
		<h2 class="title">{{ project.title }}</h2>
		<p>{{ project.desc }}</p>
		<a href="#/detail/{{ $id }}">Read More</a>
	</article>
</div>