---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV RAD EXAM ORDER 

 property | value 
--- | --- 
 label | MAGV RAD EXAM ORDER
 tag | XMORDER
 routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
 return value type | ARRAY
 description | Wraps a call to the RAMAG EXAM ORDER remote procedure, and re-formatsthe output for the DICOM Importer II application. Returns the IEN ofthe new order in the RAD/NUC MED ORDERS file (#75.1), oran array of error messages.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RADFN | LITERAL |  | true | Patient IEN (DFN). | 
| RAMLC | LITERAL |  | true | IEN of the imaging location in the IMAGING LOCATIONS file (#79.1). | 
| RAPROC | LITERAL |  | true | Radiology procedure and optional modifiers  ^01: Procedure IEN in the RAD/NUC MED PROCEDURES file (#71)  ^02: Optional procedure modifiers (IENs in  ...  the PROCEDURE MODIFIERS file (#71.2))  ^nn: | 
| REQDTE | LITERAL |  | true | Desired date for the exam in HL7 format (TS): YYYYMMDD. If time is provided, it is ignored. The date must be exact. | 
| RACAT | LITERAL |  | true | Exam category: internal value of the CATEGORY OF EXAM field (4) of the RAD/NUC MED ORDERS file (#75.1). | 
| REQLOC | LITERAL |  | true | IEN of the requesting location in the HOSPITAL LOCATION file (#44). | 
| REQPHYS | LITERAL |  | true | IEN of the requesting physician in the NEW PERSON file (#200). | 
| REASON | LITERAL |  | true | Reason for study. See the REASON FOR STUDY field (1.1) of the RAD/NUC MED ORDERS file (#75.1) for details. | 
| RAMSC | LIST |  |  | Items of this list define miscellaneous/optional order parameters. Eachrecord has 3 or more pieces separated by '^':   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:    CLINHIST^{Seq#}^{Line of clinical history}    Text for the CLINICAL HISTORY FOR EXAM field (400)    of the file #75.1   ISOLPROC^^{n|y}    Value for the ISOLATION PROCEDURES field (24)    of the file #75.1   PREGNANT^^{n|u|y}    Value for the PREGNANT field (13) of the file #75.1   PREOPDT^^{Internal date value}    Date and time for the PRE-OP SCHEDULED DATE/TIME    field (12) of the file #75.1 in HL7 format (TS):    YYYYMMDD[HHMM[+/-ZZZZ]]. If seconds are provided,    they are ignored. The date must be exact.   REQNATURE^^{e|i|p|s|v|w}    Value for the NATURE OF (NEW) ORDER ACTIVITY field (26)    of the file #75.1   REQURG^^{1|2|9}    Value for the REQUEST URGENCY field (6)    of the file #75.1   TRANSPMODE^^{a|p|s|w}    Value for the MODE OF TRANSPORT field (19)    of the file #75.1 Records can be added to the list in any order. See the comments precedingthe $$ORDER^RAMAG02 for more details. Example:   with RPCBroker.Param[8] do    begin      PType := list;      Mult[1] := 'PREGNANT^^y';      Mult[2] := 'PREOPDT^^200001041400';      Mult[3] := 'CLINHIST^1^Clinical history line #1';      Mult[4] := 'CLINHIST^2^Clinical history line #2';      Mult[5] := 'CLINHIST^3^Clinical history line #3';    end; | 




 ###### Generated on January 11th 2017, 6:39:43 am