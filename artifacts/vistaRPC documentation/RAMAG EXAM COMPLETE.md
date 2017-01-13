---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RAMAG EXAM COMPLETE 

 property | value 
--- | --- 
 label | {::nomarkdown}RAMAG EXAM COMPLETE{:/}
 tag | {::nomarkdown}COMPLETE{:/}
 routine | [RAMAGRP1](http://code.osehra.org/dox/Routine_RAMAGRP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RAMAG EXAM COMPLETE remote procedure completes the exam. It also sendsrequired HL7 messages, sends changed order control \XX\ to CPRS, but doesnot send VistA alerts regarding the exam status change.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RAEXAM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}String of exam/case identifiers separated by '^':  ^01: IEN of the patient in the RAD/NUC MED PATIENT file (#70)  ^02: IEN in the REGISTERED EXAMS multiple (sub-file #70.02)  ^03: IEN in the EXAMINATIONS multiple (sub-file #70.03){:/} | 
| {::nomarkdown}RAMSC{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Items of this list define miscellaneous/optional exam and/or reportparameters. Each record has 3 or more pieces separated by '^':   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:   ACLHIST^{Seq#}^{Line of clinical history}    Text for the ADDITIONAL CLINICAL HISTORY field    (400) of the RAD/NUC MED REPORTS file (#74).   FLAGS^^{flags}    Flags that control the execution (can be combined):     F  Try to enforce the new status even if some        required fields are not populated.     S  Do not send HL7 message to speech recognition       (dictation) systems   IMPRESSION^{Seq#}^{Line of impression text}    Text for the IMPRESSION TEXT field (300)    of the file #74.   PROBSTAT^^{text}    Value for the PROBLEM STATEMENT field (25)    of the file #74.   REPORT^{Seq#}^{Line of report text}    Text for the REPORT TEXT field (200)    of the file #74.   RPTDTE^^{date}    Date in HL7 format (TS) for the REPORTED DATE    field (8) of the file #74: YYYYMMDD. The date    must be exact. If a time part is provided, it    is ignored.   RPTSTATUS^^{status}    Internal value for the REPORT STATUS field (5)    of the file #74. Currently, only \V\ (Verified)    and \EF\ (Electronically Filed) codes are     supported.   TRANSCRST^^{IEN #200}    Internal value for the TRANSCRIPTIONIST    field (11) of the file #74: IEN in the NEW    PERSON file (#200).   VERDTE^^{date}    Date/time in HL7 format (TS) for the    VERIFIED DATE field (7) of the file #74:    YYYYMMDD[HHMM[+/-ZZZZ]]. The date must be    exact.   VERPHYS^^{IEN #200}    Internal value for the VERIFYING PHYSICIAN    field (9) of the file #74: IEN in the NEW    PERSON file (#200). The following optional parameters are also supported: BEDSECT, CMUSED, COMPLICAT, CONTMEDIA, CPTMODS, EXAMCAT, FILMSIZE, PRIMCAM, PRIMDXCODE,PRIMINTRES, PRIMINTSTF, PRINCLIN, RDPHARMS, RDPH-*, SECDXCODE,SERVICE, TECH, TECHCOMM, and WARD. If any of them are defined, theirvalues replace the existing ones assigned by the RAMAG EXAM REGISTER andRAMAG EXAMINED. Records can be added to the list in any order. See the comments precedingthe $$COMPLETE^RAMAG06 for more details. If you want to clear a multiple that already has a value, assign \@\ orempty string to the parameter itself and do not set any subscripts. Forexample, the following construction will clear the CONTRAST MEDIA multiple: Mult[i] := 'CONTMEDIA^^@'. Example:   with RPCBroker.Param[4] do    begin      PType := list;      Mult[1] := 'PRIMDXCODE^^1';      Mult[2] := 'CONTMEDIA^^N';      Mult[3] := 'REPORT^1^Report line #1';      Mult[4] := 'REPORT^2^Report line #2';      Mult[5] := 'IMPRESSION^1^Impression line #1';      Mult[6] := 'FLAGS^^FS';      Mult[7] := 'RPTDTE^^20071215';    end;{:/} | 




 Generated on January 13th 2017, 7:11:27 am