---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN ADDCMT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ADDCMT{:/}
 tag | {::nomarkdown}CMT{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows addition of a comment to a consult request/consult without changingits status. Optionally, allows sending of an alert to the requestingprovider and others.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Add comment to existing consult without changing status
 Leading comment lines | ORIEN - IEN of consult from File 123
ORERR - return array for results/errors
ORCOM is the comments array to be added
passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.
ORALRT - should alerts be sent to anyone?
ORALTO - array of alert recipient IENs

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the consult in file 123, REQUEST/CONSULT.{:/} | 
| {::nomarkdown}Comments{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of comments in the form ARRAY(0)..ARRAY(n).{:/} | 
| {::nomarkdown}Alert{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If '1', send an alert to the requesting provider.  Otherwise, don't.{:/} | 
| {::nomarkdown}Alert to{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains pointers to NEW PERSON FILE (200) for those to receive alert forthis addition of a comment. {:/} | 




 Generated on January 13th 2017, 5:52:13 am