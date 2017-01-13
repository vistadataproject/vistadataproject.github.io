---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN DISCONTINUE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN DISCONTINUE{:/}
 tag | {::nomarkdown}DC{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Discontinue a consult or deny a consult request.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Discontinue or Deny a consult

 Leading comment lines | {::nomarkdown}GMRCO - Internal file number of consult from File 123
GMRCORNP - Provider who Discontinued or Denied consult
GMRCAD - Date/Time Consult was discontinued or denied.
GMRCACTM - If consult is 'DENIED' passed in as 'DY'; if consult is Discontinued passed in as 'DC'.
ORCOM - Array containing explanation of why consult was denied. Passed as the following form :
ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.
Comment is a required field when consult is denied or discontinued.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of the consult/request.{:/} | 
| {::nomarkdown}PROVIDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of the person discontinuing/denying the consult.Points to NEW PERSON file (#200){:/} | 
| {::nomarkdown}DATE OF ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date of the discontinuance/denial of the consult.{:/} | 
| {::nomarkdown}ACTION TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}'DC' for discontinue, 'DY' for deny{:/} | 
| {::nomarkdown}COMMENTS{:/} | {::nomarkdown}WORD PROCESSING{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Array of comments related to the discontinuance/denial of the consult.{:/} | 




 Generated on January 13th 2017, 6:15:57 am