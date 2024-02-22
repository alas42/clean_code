## Principes SOLID non respectés

### Single Responsabilité:
	- ModuleMartien & Rover posen problèment, trop de responsabilités 
		- ex: la gestion de direction qui est implémentée
		- ex: le booleen de récupération
### Open/Close:
	- Rover:
		- ex: s'il y a un changement/ajout dans la direction ou un ajout de dimension pour le rover, il y aura un problème
### Liskov:
	(- Un hélicoptère n'est pas un rover, ce n'est pas lisible, ni pratique)
### Interface Segregation:
	- Le rover implémente monter/descendre alors que cela ne sert à rien. 
### Dependecy Injection:
	- 
