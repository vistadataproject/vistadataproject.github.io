---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RAMAG EXAM ORDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RAMAG EXAM ORDER{:/}
 tag | {::nomarkdown}ORDER{:/}
 routine | [RAMAGRP1](http://code.osehra.org/dox/Routine_RAMAGRP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RAMAG EXAM ORDER remote procedure requests a Radiology exam for thepatient and returns the IEN of the new order in the RAD/NUC MED ORDERSfile (#75.1). It also sends all required notifications..{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RADFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN (DFN).{:/} | 
| {::nomarkdown}RAMLC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the imaging location in the IMAGING LOCATIONS file (#79.1).{:/} | 
| {::nomarkdown}RAPROC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Radiology procedure and optional modifiers  ^01: Procedure IEN in the RAD/NUC MED PROCEDURES file (#71)  ^02: Optional procedure modifiers (IENs in  ...  the PROCEDURE MODIFIERS file (#71.2))  ^nn:{:/} | 
| {::nomarkdown}REQDTE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Desired date for the exam in HL7 format (TS): YYYYMMDD. If time is provided, it is ignored. The date must be exact.{:/} | 
| {::nomarkdown}RACAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Exam category: internal value of the CATEGORY OF EXAM field (4) of the RAD/NUC MED ORDERS file (#75.1).{:/} | 
| {::nomarkdown}REQLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the requesting location in the HOSPITAL LOCATION file (#44).{:/} | 
| {::nomarkdown}REQPHYS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the requesting physician in the NEW PERSON file (#200).{:/} | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Reason for study. See the REASON FOR STUDY field (1.1) of the RAD/NUC MED ORDERS file (#75.1) for details.{:/} | 
| {::nomarkdown}RAMSC{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Items of this list define miscellaneous/optional order parameters. Eachrecord has 3 or more pieces separated by '^':   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:    CLINHIST^{Seq#}^{Line of clinical history}    Text for the CLINICAL HISTORY FOR EXAM field (400)    of the file #75.1   ISOLPROC^^{ny}    Value for the ISOLATION PROCEDURES field (24)    of the file #75.1   PREGNANT^^{nuy}    Value for the PREGNANT field (13) of the file #75.1   PREOPDT^^{Internal date value}    Date and time for the PRE-OP SCHEDULED DATE/TIME    field (12) of the file #75.1 in HL7 format (TS):    YYYYMMDD[HHMM[+/-ZZZZ]]. If seconds are provided,    they are ignored. The date must be exact.   REQNATURE^^{eipsvw}    Value for the NATURE OF (NEW) ORDER ACTIVITY field (26)    of the file #75.1   REQURG^^{129}    Value for the REQUEST URGENCY field (6)    of the file #75.1   TRANSPMODE^^{apsw}    Value for the MODE OF TRANSPORT field (19)    of the file #75.1 Records can be added to the list in any order. See the comments precedingthe $$ORDER^RAMAG02 for more details. Example:   with RPCBroker.Param[8] do    begin      PType := list;      Mult[1] := 'PREGNANT^^y';      Mult[2] := 'PREOPDT^^200001041400';      Mult[3] := 'CLINHIST^1^Clinical history line #1';      Mult[4] := 'CLINHIST^2^Clinical history line #2';      Mult[5] := 'CLINHIST^3^Clinical history line #3';    end;{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}