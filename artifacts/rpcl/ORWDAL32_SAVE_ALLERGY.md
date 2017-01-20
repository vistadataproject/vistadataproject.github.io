---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORWDAL32 SAVE ALLERGY 

 property | value 
--- | --- 
 name | ORWDAL32 SAVE ALLERGY
 domain | Allergy
 description | {::nomarkdown}Add new allergy record{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORWDAL32 SAVE ALLERGY)
 MUMPS implementation | [EDITSAVE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 type | CHANGE
 complexity | HIGH
 uses | [EIE,NKA,CREATE]
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| ORALIEN | LITERAL | true | {::nomarkdown}Allergy IEN{:/} | 0 | 
| ORDFN | REFERENCE | true | {::nomarkdown}Patient IEN{:/} | 25 | 
| OREDITED | LIST ([UPDARRAY](#for-id-oredited)) | true | {::nomarkdown}ARRAY OF VALUE STRINGS{:/} |  | 

#### UPDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
| GMRAGNT | REFERENCE | GMR_Allergies-120_82 VA_Generic-50_6 Drug-50 Drug_Ingredients-50_416 VA_Drug_Class-50_605  | {::nomarkdown}GNT - combination of reactant ^ gmr_allergy ex/ PENICILLIN^16;PSNDF(50.6,{:/} | reactant | \GMRAGNT\: \APPLES^208;GMRD(120.82,\ | 
| GMRANATR | ENUMERATION | {::nomarkdown}<dl><dt>A</dt><dd>ALLERGY</dd><dt>P</dt><dd>PHARMACOLOGIC</dd><dt>U</dt><dd>UNKNOWN</dd></dl>{:/} | {::nomarkdown}Mechanism{:/} | mechanism | \GMRANATR\: \A^Allergy\ | 
| GMRATYPE | ENUMERATION | {::nomarkdown}<dl><dt>D</dt><dd>DRUG</dd><dt>DF</dt><dd>DRUG, FOOD</dd><dt>F</dt><dd>FOOD</dd><dt>O</dt><dd>OTHER</dd></dl>{:/} | {::nomarkdown}Allergy Type{:/} | allergyType | \GMRATYPE\: \F^Food\ | 
| GMRAORIG | REFERENCE |  | {::nomarkdown}Entered By{:/} |  | \GMRAORIG\: \57\ | 
| GMRAORDT | DATE-TIME |  | {::nomarkdown}Origination Date/Time{:/} | dateTimeEntered | \GMRAORDT\: \3160916.2002\ | 
| GMRACHT | [OBJECT] |  | {::nomarkdown}Chart Marked{:/} |  | \GMRACHT\: [\3160916.200324\] | 
| GMRAOBHX | ENUMERATION | {::nomarkdown}<dl><dt>o</dt><dd>OBSERVED</dd><dt>h</dt><dd>HISTORICAL</dd></dl>{:/} | {::nomarkdown}Observed/Historical{:/} | observedOrHistorical | \GMRAOBHX\: \o^OBSERVED\ | 
| GMRASYMP | [REFERENCE] | {properties:[{id:reaction,label:Reaction,mvdmProperty:reaction,description:One of the reactions for this allergy/adverse reaction. Delimited string in the form of <reaction_ien>^<reaction_label><reaction_fm_datetime>^<reaction_date_string>,parameterType:REFERENCE,referencedFile:120_83,required:true}]} | {::nomarkdown}Reactions{:/} | reactions | \GMRASYMP\: [\66^DROWSINESS^^^\, \9^DIARRHEA^^^\] | 
| GMRACMTS | WORD PROCESSING |  | {::nomarkdown}Comments{:/} |  | \GMRACMTS\: [\a comment\] | 
| GMRASEVR | ENUMERATION | {::nomarkdown}<dl><dt>1</dt><dd>MILD</dd><dt>2</dt><dd>MODERATE</dd><dt>3</dt><dd>SEVERE</dd></dl>{:/} | {::nomarkdown}Allergy Severity{:/} | allergySeverity | \GMRASEVR\: \2\ | 
| GMRARDT | DATE |  | {::nomarkdown}Date Occurred{:/} | dateOccurred | \GMRARDT\: \3160917\ | 
| GMRAERR | BOOLEAN |  | {::nomarkdown}Allergy entered in error{:/} |  | \GMRAERR\: YES\ | 
| GMRAERRBY | REFERENCE |  | {::nomarkdown}Entered By{:/} |  | \GMRAERRBY\: \58\ | 
| GMRAERRDT | DATE-TIME |  | {::nomarkdown}Date Entered in Error{:/} |  | \GMRAERRDT\: \3160926.163633\ | 
| GMRAERRCMTS | WORD PROCESSING |  | {::nomarkdown}Comments{:/} |  | \GMRAERRCMTS\: [\a comment about the error\, \here is another line\] | 
| GMRANKA | BOOLEAN |  | {::nomarkdown}No Known Allergies{:/} |  | \GMRANKA\: \YES\ | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 20th 2017, 10:12:59 pm</p>{:/}