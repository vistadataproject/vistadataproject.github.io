---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RAMAG EXAM CANCEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RAMAG EXAM CANCEL{:/}
 tag | {::nomarkdown}EXAMCANC{:/}
 routine | [RAMAGRP1](http://code.osehra.org/dox/Routine_RAMAGRP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RAMAG EXAM CANCEL remote procedure cancels the Radiology exam(s) andsends all required notifications. If all exams that reference the same order/request are canceled, this  function can also cancel/hold the order (if the appropriate parameters areprovided).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RAEXAM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}String of exam/case identifiers separated by '^':  ^01: IEN of the patient in the RAD/NUC MED PATIENT file (#70)  ^02: IEN in the REGISTERED EXAMS multiple (sub-file #70.02)  ^03: IEN in the EXAMINATIONS multiple (sub-file #70.03){:/} | 
| {::nomarkdown}RAREASON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Reason for cancelation: either IEN of a record of the RAD/NUC MED REASONfile (#75.2) or a valid synonym (see SYNONYM field (3) of the file #75.2).The referenced record must have the 'CANCEL REQUEST' or 'GENERAL REQUEST'type (see TYPE OF REASON field (2) of the file #75.2).{:/} | 
| {::nomarkdown}RAMSC{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Items of this list define miscellaneous/optional parameters. Each recordhas 3 or more pieces separated by '^':   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:    HOLDESC^{Seq#}^{Line of hold description}    Text for the HOLD DESCRIPTION field (25)    of the file #75.1.   ORDRSN^^{Cancel/hold reason for related order}    Either IEN of a record of the RAD/NUC MED    REASON file (#75.2) or a valid synonym     (see SYNONYM field (3) of that file).     If this parameter is not defined or empty,    the value of the RAREASON parameter is    assumed. Records can be added to the list in any order. See the comments precedingthe $$EXAMCANC^RAMAG05 for more details. If the RAFLAGS parameter contains the 'O' flag, the 'ORDRSN' and 'HOLDESC'parameters determine whether the related order is canceled or put on hold.Otherwise, they are ignored.  * If the reason record referenced by the 'ORDRSN'   has the CANCEL REQUEST (1) type, then the 'HOLDESC'   is ignored and the order is canceled.  * If the record referenced by the 'ORDRSN' is of   the HOLD REQUEST (3) type, then the order is put   on hold. If the 'HOLDESC' is defined, the text is   stored into the HOLD DESCRIPTION field.  * If the record referenced by the 'ORDRSN' is of   the GENERAL REQUEST type (9), then the action   performed on the order is determined by the   'HOLDESC'. If it is defined, then the order is   put hold; otherwise, the order is canceled. Examples:   with RPCBroker.Param[2] do    begin      PType := list;      Mult[1] := 'ORDRSN^^OHR';      Mult[2] := 'HOLDESC^1^Hold description line #1';      Mult[3] := 'HOLDESC^2^Hold description line #2';    end;{:/} | 
| {::nomarkdown}RAFLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control execution (can be combined):   A  Cancel all related exams/cases (those that     reference the same order).   O  Cancel/hold the related order after successful     exam cancelation.      The order will be canceled or put on hold only     if there are no more active cases associated     with it.      Otherwise, the error code -42 will be returned.     Use the \A\ flag to cancel all related exams     and guarantee the order cancelation.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}