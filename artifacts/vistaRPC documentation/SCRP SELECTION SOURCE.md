---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP SELECTION SOURCE 

 property | value 
--- | --- 
 label | SCRP SELECTION SOURCE
 tag | GETDATA
 routine | [SCRPBK1](http://code.osehra.org/dox/Routine_SCRPBK1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a list of entries that is displayedto the user as part of the entry selection process.This process occurs during query template setup. Itinvolves the user indicating which divsions, teams,roles, clinics, practitioners and user classes s/hedesires information about on a report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENTITY TYPE | LITERAL | 20 | true | This parameter indicates the entity type of the slecetion.The following types are possible:       DIVISION       TEAM       PRACTITIONER       ROLE       CLINIC       USER CLASS | 
| REPORT ID | LITERAL | 20 | true | Internal entry number of the report definition.Each report has a differenrt set of criteria thatthe query specification must meet. This affectswhich entity entries are allowed to be chosen bythe user. | 
| REPORT NAME | LITERAL | 50 | true | Name of the report. | 
| SEARCH TEXT | LITERAL | 50 | true | This parameter contains the free-text entered bythe user that is compared to the entity entry's nameto filter out possible choices. If null, thenall valid entries are presented to the user. | 
| SELECTIONS | LIST |  | true | This array contains all of the selections already madeby the user for the current query template. This listof selections is then used to filter out possible selectionsfor the current 'entity type' being requested.For example, often the report criteria requires one ormore teams must be selected. However, the team must bein one of the divisions already selected by the user.In this case, the user's division selections areused to filter out inapproiate teams during a teamarray build. | 