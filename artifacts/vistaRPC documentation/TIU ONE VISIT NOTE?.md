---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ONE VISIT NOTE? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU ONE VISIT NOTE?{:/}
 tag | {::nomarkdown}TIUVISIT{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Boolean RPC to evaulate if note has a corresponding visit.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Check for a 1 time only doc
 Leading comment lines | {::nomarkdown}TIUY    =    return value<br/>= 0 if can add more than one or none already exist<br/>= 1 if cannot add more than one and one already exists<br/>DOCTYP  =    Pointer to ^TUI(8925.1,   TIU DOCUMENT DEFINITION<br/>DFN     =    Patient IEN<br/>VISIT   =    Visit String "LOC;VDATE;VTYP"{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the TIU document type.{:/} | 
| {::nomarkdown}TIUDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's internal entry number (DFN).{:/} | 
| {::nomarkdown}TIUVISIT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's visit internal entry number.{:/} | 




 Generated on January 13th 2017, 6:44:47 am