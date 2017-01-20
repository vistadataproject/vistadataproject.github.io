---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCRP SELECTION SOURCE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCRP SELECTION SOURCE{:/}
 tag | {::nomarkdown}GETDATA{:/}
 routine | [SCRPBK1](http://code.osehra.org/dox/Routine_SCRPBK1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of entries that is displayedto the user as part of the entry selection process.This process occurs during query template setup. Itinvolves the user indicating which divsions, teams,roles, clinics, practitioners and user classes s/hedesires information about on a report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENTITY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the entity type of the slecetion.The following types are possible:       DIVISION       TEAM       PRACTITIONER       ROLE       CLINIC       USER CLASS{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the report definition.Each report has a differenrt set of criteria thatthe query specification must meet. This affectswhich entity entries are allowed to be chosen bythe user.{:/} | 
| {::nomarkdown}REPORT NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the report.{:/} | 
| {::nomarkdown}SEARCH TEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the free-text entered bythe user that is compared to the entity entry's nameto filter out possible choices. If null, thenall valid entries are presented to the user.{:/} | 
| {::nomarkdown}SELECTIONS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This array contains all of the selections already madeby the user for the current query template. This listof selections is then used to filter out possible selectionsfor the current 'entity type' being requested.For example, often the report criteria requires one ormore teams must be selected. However, the team must bein one of the divisions already selected by the user.In this case, the user's division selections areused to filter out inapproiate teams during a teamarray build.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}