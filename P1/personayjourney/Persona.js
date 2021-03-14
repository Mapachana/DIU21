/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Amparo",
				Photo: "image3.jpeg",
				Quote: "La vida son dos días y hay que vivirlos",
				Age: 59,
				Occupation: "Frutera",
				Family: "Divorciada con una hija",
				Location: "Mojácar (Almería)",
				Character: "Disfrutar la vida",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Ver mundo", "Pasar más tiempo con su hija", "Conocer gente nueva"],
				Frustrations: ["Le cuesta adaptarse a las nuevas tecnologías", "Piensa que no ha disfrutado la vida como debería", "Está perdiendo la vista muy rápidamente"],
				Bio: "Nació y vivió en Mojácar toda su vida, trabaja en la frutería que heredó de sus padres y quiere pasarle a su hija. Tras 35 años casada se ha divorciado y unido a la asociación de mujeres local para viajar y recuperar el tiempo perdido.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Acaba de divorciarse y quiere visitar nuevos lugares con su hija y amigas",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Jorge",
				Photo: "image6.jpeg",
				Quote: "El futuro es fruto de la semilla del trabajo que hagas hoy",
				Age: 28,
				Occupation: "Camarero del telepizza",
				Family: "Padres y su pareja",
				Location: "Jódar (Jaén)",
				Character: "Ser rico",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Acabar la carrera", "Conseguir un trabajo estable y bien pagado", "Independizarse con su pareja"],
				Frustrations: ["No consigue aprobar sus asignaturas pendientes", "No le gusta su trabajo actual", "No puede ahorrar para el futuro"],
				Bio: "Nació en Jaén pero su familia se mudó a Jódar por falta de recursos. Allí conoció a su actual pareja. Está estudiando su último año de carrera tras varios cursos recuperando asignaturas y buscando un trabajo mejor remunerado.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "Acaba de cumplir 5 años con su pareja y quiere regalarle una escapada por su aniversario" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
