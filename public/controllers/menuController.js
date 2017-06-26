	forestalApp.controller('menuController', function($scope) {
		//MENU LINKS
		$scope.menuLinks = [
		{  text : 'ANGULOS', src : 'pdf/angulos.pdf' },
		{  text : 'ALAMBRES RURALES', src : 'pdf/Alambres rurales - Tejido.pdf' },
		{  text : 'ALAMBRES PARA CONSTRUCCION', src : 'pdf/Alambres para construcción.pdf' },	
		{  text : 'BARRAS LAMINADAS', src : 'pdf/Barras Laminadas.pdf' },
		{  text : 'CAÑOS ESTRUCTURALES', src : 'pdf/Caños Estructurales.pdf' },
		{  text : 'CHAPAS LAMINADAS', src : 'pdf/Chapas Laminadas.pdf' },
		{  text : 'CHAPAS REVESTIDAS', src : 'pdf/Chapas Revestidas.pdf' },
		{  text : 'CLAVOS', src : 'pdf/Chapas Laminadas.pdf' },
		{  text : 'CORDÓN PARA PRETENSADO', src : 'pdf/Chapas Revestidas.pdf' },
		{  text : 'HIERROS PARA CONSTRUCCIÓN', src : 'pdf/Clavos.pdf' },
		{  text : 'MALLAS', src : 'pdf/Cordón para Pretensado.pdf' },
		{  text : 'METAL DESPLEGADO', src : 'pdf/Hierros para la Construcción.pdf' },
		{  text : 'PERFILES DE CHAPA', src : 'pdf/Mallas.pdf' },
		{  text : 'PERFILES DE HIERRO', src : 'pdf/Metal Desplegado.pdf' },
		{  text : 'PLANCHUELAS', src : 'pdf/Perfiles de Chapa.pdf' },
		{  text : 'PRODUCTOS PARA SOLDADURA', src : 'pdf/Perfiles de Hierro.pdf' },
		{  text : 'TANQUES AUSTRALIANOS', src : 'pdf/Plancuelas.pdf' },
		{  text : 'TUBOS ALCANTARILLAS', src : 'pdf/Productos para soldadura.pdf' },
		{  text : 'TUBOS DE CONDUCCIÓN', src : 'pdf/Tanques Australianos.pdf' },
		{  text : 'TUBOS PARA USO MECÁNICO', src : 'pdf/Tubos Alcantarillas.pdf' },
		{  text : 'VARILLAS GALVANIZADAS', src : 'pdf/Varillas Galvanizadas.pdf' }
		];

		$scope.menuDownloadLinks = [
		{  text : 'DESCARGAR CATÁLOGO ACINDAR PRODUCTOS AGROPECUARIOS', src : '' },
		{  text : 'DESCARGAR CATÁLOGO ACINDAR CONSTRUCCIÓN CIVIL', src : '' },
		{  text : 'DESCARGAR CATÁLOGO SIDERAR', src : '' }
		];

		$scope.openPDF = function (src){
			window.open(src, '_blank', 'fullscreen=yes');
		}
	});