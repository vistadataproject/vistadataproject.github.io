---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV RAD EXAM REGISTER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV RAD EXAM REGISTER{:/}
 tag | {::nomarkdown}XMREGSTR{:/}
 routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Wraps a call to the RAMAG EXAM REGISTER remote procedure, and re-formatsthe output for the DICOM Importer II application. Returns the IEN ofthe new case in the RAD/NUC MED PATIENT file (#70), or an arrayof error messages.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RAOIFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the order in the RAD/NUC MED ORDERS file (#75.1).{:/} | 
| {::nomarkdown}EXMDTE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Date and time of the exam in HL7 format (TS): YYYYMMDDHHMM[+/-ZZZZ]. If seconds are provided, they are ignored. The date must be exact and the time is required.{:/} | 
| {::nomarkdown}RAMSC{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Items of this list define miscellaneous/optional exam parameters. Eachrecord has 3 or more pieces separated by '^':   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:   BEDSECT^^{IEN #42.4}    Internal value for the BEDSECTION field (19) of    the EXAMINATIONS multiple (sub-file #70.03).   EXAMCAT^^{CEIORS}    Value for the CATEGORY OF EXAM field (4) of the    EXAMINATIONS multiple (sub-file #70.03).   FLAGS^^{flags}    Flags that control the execution (can be combined):     A  If this flag is provided, then the registration        entry point adds the new case to the existing       ones with the same date/time instead of        returning the error code -28.        If the existing date/time record stores an exam        set and the \D\ flag is not provided, then the       error code -54 is returned.     D  If there is an existing case with the same        date/time, then the time of the new case is       incremented by 1 minute until an unused date/time       is found.        If the \A\ flag is also provided, then time        increments also stop when a non-examset       date/time record is found.        If the date is also changed during the time        modification, then the case is not registered and       the error code -29 is returned.   PRINCLIN^^{IEN #44}    Internal value for the PRINCIPAL CLINIC field (8) of    the EXAMINATIONS multiple (sub-file #70.03).   RAPROC^{Seq#}^{IEN #71}^{IEN #71.2}^{IEN #71.2}^...    Radiology procedure and optional modifiers.   SERVICE^^{IEN #49}    Internal value for the SERVICE field (7) of    the EXAMINATIONS multiple (sub-file #70.03).   SINGLERPT^^{01}    If this parameter is defined and not 0, then all    cases should be associated with the same order    and they will share the same report. See the    MEMBER OF SET (25) and IMAGING ORDER (11) fields    of the sub-file #70.03 for more details.   TECHCOMM^^{text}    Value for the TECHNOLOGIST COMMENT field (4) of the    ACTIVITY LOG multiple (sub-file #70.07).    WARD^^{IEN #42}    Internal value for the WARD field (6) of    the EXAMINATIONS multiple (sub-file #70.03). Records can be added to the list in any order. See the comments precedingthe $$REGISTER^RAMAG03 for more details. Example:   with RPCBroker.Param[2] do    begin      PType := list;      Mult[1] := 'BEDSECT^^12';      Mult[2] := 'SERVICE^^43';      Mult[3] := 'WARD^^456';      Mult[4] := 'EXAMCAT^^I';    end;{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}