/* Javascript App File */

var app = angular.module('projectManagementTool', []);

app.controller('ProjectController', ['$scope', function($scope){
	$scope.projects = [];
	$scope.selectedProject = -1;

	$scope.changeState = function() {
		$scope.projectsListState = 'invisible';
		$scope.tasksListState = 'invisible';
		$scope.addTaskState = 'invisible';
		$scope.addProjectState = 'invisible';
	}


	if($scope.projects.length === 0) {
		$scope.addProjectState = 'visible';
	}

	$scope.addProject = function(projectName) {
		$scope.projects.push({
			'name': projectName,
			'tasks': []
		});

		$scope.projectName = '';

		$scope.changeState();

		$scope.projectsListState = 'visible';

		$scope.selectedProject = -1;
	}

	$scope.selectProject = function(index) {
		$scope.changeState();

		$scope.tasksListState = 'visible';

		$scope.selectedProject = index;
	}

	$scope.addTask = function(index) {
		$scope.changeState();

		$scope.addTaskState = 'visible';
	}
	
	$scope.saveTask = function(index) {
		$scope.changeState();

		$scope.tasksListState = 'visible';

		$scope.projects[$scope.selectedProject].tasks.push({
			'name': $scope.taskName,
			'status': 'uncomplete'
		});

		$scope.taskName = '';
	}

	$scope.closeTask = function(projectId, taskId, action) {
		if(action === 'remove') {
			$scope.projects[projectId].tasks.splice(taskId, 1);
		} else {
			$scope.projects[projectId].tasks[taskId].status = 'complete';
		}
	}

}]);