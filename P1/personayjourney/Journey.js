/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Amparo",
                Photo: "image3.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer un viaje con su grupo de amigas durante una semana",
                touch1: "Agenda",
                feel1: "4",
                con1: "Ver qué días tienen todas disponibles para realizar el viaje",
                ima1: "cartoon-writting2.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Le pide a su hija que consulte posibles destinos y planes",
                touch2: "Su hija",
                feel2: "4",
                con2: "Tiene que pedirle un favor a su hija, explicarle su plan y esperar a que ella busque lo que le ha pedido",
                ima2: "cartoon-talking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "La hija le pasa el enlace de una página de turismo en Granada y busca hotel para todas",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Tiene problemas para realizar la reserva por internet, le cuesta ver la letra de la página, tiene que hacer zoom",
                ima3: "cartoon-PCtyping.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "EL hotel inicial solo admite reserva online, luego intenta reservar en otro por teléfono",
                touch4: "Móvil",
                feel4: "2",
                con4: "Le cuesta encontrar un teléfono de contacto y tardan en responderle a la llamada, hay menos habitaciones individuales disponibles de las que necesita",
                ima4: "cartoon-phoningangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Llama a sus amigas para reorganizar las habitaciones",
                touch5: "móvil (whatsapp)",
                feel5: "1",
                con5: "Sus amigas tardan en organizarse",
                ima5: "cartoon-phone.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva en el hotel",
                touch6: "Teléfono",
                feel6: "2",
                con6: "Una de las amigas no responde al grupo por lo que Amparo decide con quién dormirá",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Jorge",
                Photo: "image6.jpeg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere organizar una escapada de fin de semana con su pareja por su aniversario",
                touch1: "agenda",
                feel1: "5",
                con1: "Su presupuesto es muy limitado",
                ima1: "cartoon-writting2.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar por internet posibles destinos",
                touch2: "Móvil",
                feel2: "4",
                con2: "El móvil es incómodo para ver toda la información y es difícil ver un precio final aproximado",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Intenta reservar un bono turístico",
                touch3: "Ordenador",
                feel3: "4",
                con3: "Debido a la pandemia se han retirado de la venta los bonos turísticos",
                ima3: "cartoon-PChappy.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca visitas guiadas para visitar los monumentos",
                touch4: "Ordenador",
                feel4: "1",
                con4: "No encuentra información sobre si las visitas guiadas disponibles están adaptadas para personas sordas",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva entradas solo para los monumentos, sin visitas guiadas",
                touch5: "Ordenador",
                feel5: "2",
                con5: "Sale más caro al no disponer de bono turístico, por lo que tendrá que abaratar gastos en el alojamiento",
                ima5: "cartoon-PCtyping.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie organizar la escapada, pero no como le hubiera gustado",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Se ha gastado más dinero del que había presupuestado en un principio y no ha conseguido ninguna visita guiada",
                ima6: "cartoon-resting.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



