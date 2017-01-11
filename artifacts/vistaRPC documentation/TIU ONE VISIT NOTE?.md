---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ONE VISIT NOTE? 

 property | value 
--- | --- 
 label | TIU ONE VISIT NOTE?
 tag | TIUVISIT
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | Boolean RPC to evaulate if note has a corresponding visit.


### Method description

 property | value 
--- | --- 
 Method comment | Check for a 1 time only doc
 Leading comment lines | TIUY    =    return value,= 0 if can add more than one or none already exist,= 1 if cannot add more than one and one already exists,DOCTYP  =    Pointer to ^TUI(8925.1,   TIU DOCUMENT DEFINITION,DFN     =    Patient IEN,VISIT   =    Visit String "LOC;VDATE;VTYP"

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDOC | LITERAL |  | true | This is the TIU document type. | 
| TIUDFN | LITERAL |  | true | This is the patient's internal entry number (DFN). | 
| TIUVISIT | LITERAL |  | true | This is the patient's visit internal entry number. | 




 Generated on January 11th 2017, 7:15:04 am