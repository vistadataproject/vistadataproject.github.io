---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORWDAL32 SAVE ALLERGY 

 property | value 
--- | --- 
 id | ORWDAL32_SAVE_ALLERGY
 name | ORWDAL32 SAVE ALLERGY
 function | EDITSAVE^ORWDAL32
 rpcType | CHANGE
 complexity | HIGH
 uses | [EIE,NKA,CREATE]
 description | Add new allergy record
 returnType | SINGLE VALUE
 returnDescription | 

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
| GMRANATR | ENUMERATION | <dl><dt>A</dt><dd>ALLERGY</dd><dt>P</dt><dd>PHARMACOLOGIC</dd><dt>U</dt><dd>UNKNOWN</dd></dl> | Mechanism | mechanism | \GMRANATR\: \A^Allergy\ | 
| GMRATYPE | ENUMERATION | <dl><dt>D</dt><dd>DRUG</dd><dt>DF</dt><dd>DRUG, FOOD</dd><dt>F</dt><dd>FOOD</dd><dt>O</dt><dd>OTHER</dd></dl> | Allergy Type | allergyType | \GMRATYPE\: \F^Food\ | 
| GMRAORIG | REFERENCE |  | Entered By |  | \GMRAORIG\: \57\ | 
| GMRAORDT | DATE-TIME |  | Origination Date/Time | dateTimeEntered | \GMRAORDT\: \3160916.2002\ | 
| GMRACHT | [OBJECT] |  | Chart Marked |  | \GMRACHT\: [\3160916.200324\] | 
| GMRAOBHX | ENUMERATION | <dl><dt>o</dt><dd>OBSERVED</dd><dt>h</dt><dd>HISTORICAL</dd></dl> | Observed/Historical | observedOrHistorical | \GMRAOBHX\: \o^OBSERVED\ | 
| GMRASYMP | [REFERENCE] | {properties:[{id:reaction,label:Reaction,mvdmProperty:reaction,description:One of the reactions for this allergy/adverse reaction. Delimited string in the form of <reaction_ien>^<reaction_label><reaction_fm_datetime>^<reaction_date_string>,parameterType:REFERENCE,referencedFile:120_83,required:true}]} | Reactions | reactions | \GMRASYMP\: [\66^DROWSINESS^^^\, \9^DIARRHEA^^^\] | 
| GMRACMTS | WORD PROCESSING |  | Comments |  | \GMRACMTS\: [\a comment\] | 
| GMRASEVR | ENUMERATION | <dl><dt>1</dt><dd>MILD</dd><dt>2</dt><dd>MODERATE</dd><dt>3</dt><dd>SEVERE</dd></dl> | Allergy Severity | allergySeverity | \GMRASEVR\: \2\ | 
| GMRARDT | DATE |  | Date Occurred | dateOccurred | \GMRARDT\: \3160917\ | 
| GMRAERR | BOOLEAN |  | Allergy entered in error |  | \GMRAERR\: YES\ | 
| GMRAERRBY | REFERENCE |  | Entered By |  | \GMRAERRBY\: \58\ | 
| GMRAERRDT | DATE-TIME |  | Date Entered in Error |  | \GMRAERRDT\: \3160926.163633\ | 
| GMRAERRCMTS | WORD PROCESSING |  | Comments |  | \GMRAERRCMTS\: [\a comment about the error\, \here is another line\] | 
| GMRANKA | BOOLEAN |  | No Known Allergies |  | \GMRANKA\: \YES\ | 