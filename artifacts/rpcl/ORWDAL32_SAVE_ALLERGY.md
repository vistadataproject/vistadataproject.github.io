---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWDAL32 SAVE ALLERGY 

 property | value 
--- | --- 
 name | ORWDAL32 SAVE ALLERGY
 description | Add new allergy record
 MUMPS implementation | EDITSAVE^ORWDAL32
 type | CHANGE
 complexity | HIGH
 uses | [EIE,NKA,CREATE]
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| ORALIEN | LITERAL | true | Allergy IEN | 0 |  | 
| ORDFN | REFERENCE | true | Patient IEN | 25 |  | 
| OREDITED | LIST | true | ARRAY OF VALUE STRINGS |  | [List Member](#for-id-oredited) | 

### List Member Parameters


#### For ID OREDITED

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
| GMRAGNT | REFERENCE | GMR_Allergies-120_82 VA_Generic-50_6 Drug-50 Drug_Ingredients-50_416 VA_Drug_Class-50_605  | GNT - combination of reactant ^ gmr_allergy ex/ PENICILLIN^16;PSNDF(50.6, | reactant | \GMRAGNT\: \APPLES^208;GMRD(120.82,\ | 
| GMRANATR | ENUMERATION | {::nomarkdown}<dl><dt>ALLERGY</dt><dd>A</dd><dt>PHARMACOLOGIC</dt><dd>P</dd><dt>UNKNOWN</dt><dd>U</dd></dl>{:/} | Mechanism | mechanism | \GMRANATR\: \A^Allergy\ | 
| GMRATYPE | ENUMERATION | {::nomarkdown}<dl><dt>DRUG</dt><dd>D</dd><dt>DRUG, FOOD</dt><dd>DF</dd><dt>FOOD</dt><dd>F</dd><dt>OTHER</dt><dd>O</dd></dl>{:/} | Allergy Type | allergyType | \GMRATYPE\: \F^Food\ | 
| GMRAORIG | REFERENCE |  | Entered By |  | \GMRAORIG\: \57\ | 
| GMRAORDT | DATE-TIME |  | Origination Date/Time | dateTimeEntered | \GMRAORDT\: \3160916.2002\ | 
| GMRACHT | [OBJECT] |  | Chart Marked |  | \GMRACHT\: [\3160916.200324\] | 
| GMRAOBHX | ENUMERATION | {::nomarkdown}<dl><dt>OBSERVED</dt><dd>o</dd><dt>HISTORICAL</dt><dd>h</dd></dl>{:/} | Observed/Historical | observedOrHistorical | \GMRAOBHX\: \o^OBSERVED\ | 
| GMRASYMP | [REFERENCE] | {properties:[{id:reaction,label:Reaction,mvdmProperty:reaction,description:One of the reactions for this allergy/adverse reaction. Delimited string in the form of <reaction_ien>^<reaction_label><reaction_fm_datetime>^<reaction_date_string>,parameterType:REFERENCE,referencedFile:120_83,required:true}]} | Reactions | reactions | \GMRASYMP\: [\66^DROWSINESS^^^\, \9^DIARRHEA^^^\] | 
| GMRACMTS | WORD PROCESSING |  | Comments |  | \GMRACMTS\: [\a comment\] | 
| GMRASEVR | ENUMERATION | {::nomarkdown}<dl><dt>MILD</dt><dd>1</dd><dt>MODERATE</dt><dd>2</dd><dt>SEVERE</dt><dd>3</dd></dl>{:/} | Allergy Severity | allergySeverity | \GMRASEVR\: \2\ | 
| GMRARDT | DATE |  | Date Occurred | dateOccurred | \GMRARDT\: \3160917\ | 
| GMRAERR | BOOLEAN |  | Allergy entered in error |  | \GMRAERR\: YES\ | 
| GMRAERRBY | REFERENCE |  | Entered By |  | \GMRAERRBY\: \58\ | 
| GMRAERRDT | DATE-TIME |  | Date Entered in Error |  | \GMRAERRDT\: \3160926.163633\ | 
| GMRAERRCMTS | WORD PROCESSING |  | Comments |  | \GMRAERRCMTS\: [\a comment about the error\, \here is another line\] | 
| GMRANKA | BOOLEAN |  | No Known Allergies |  | \GMRANKA\: \YES\ | 