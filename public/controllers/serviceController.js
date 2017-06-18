	// create the controller and inject Angular's $scope
	forestalApp.controller('serviceController', function($scope) {
		// create a message to display in our view
		$scope.menuLinks = [
		{  text : 'ANGULOS', src : '' },
		{  text : 'BARRAS LAMINADAS', src : '' },
		{  text : 'CAÑOS ESTRUCTURALES', src : '' },
		{  text : 'CHAPAS LAMINADAS', src : '' },
		{  text : 'CHAPAS REVESTIDAS', src : '' },
		{  text : 'CLAVOS', src : '' },
		{  text : 'CORDÓN PARA PRETENSADO', src : '' },
		{  text : 'HIERROS PARA CONSTRUCCIÓN', src : '' },
		{  text : 'MALLAS', src : '' },
		{  text : 'METAL DESPLEGADO', src : '' },
		{  text : 'PERFILES DE CHAPA', src : '' },
		{  text : 'PERFILES DE HIERRO', src : '' },
		{  text : 'PLANCHUELAS', src : '' },
		{  text : 'PRODUCTOS PARA SOLDADURA', src : '' },
		{  text : 'TANQUES AUSTRALIANOS', src : '' },
		{  text : 'TUBOS ALCANTARILLAS', src : '' },
		{  text : 'TUBOS DE CONDUCCIÓN', src : '' },
		{  text : 'TUBOS PARA USO MECÁNICO', src : '' },
		{  text : 'VARILLAS GALVANIZADAS', src : '' }
		];

		$scope.menuDownloadLinks = [
		{  text : 'DESCARGAR CATÁLOGO ACINDAR PRODUCTOS AGROPECUARIOS', src : '' },
		{  text : 'DESCARGAR CATÁLOGO ACINDAR CONSTRUCCIÓN CIVIL', src : '' },
		{  text : 'DESCARGAR CATÁLOGO SIDERAR', src : '' }
		];
	});