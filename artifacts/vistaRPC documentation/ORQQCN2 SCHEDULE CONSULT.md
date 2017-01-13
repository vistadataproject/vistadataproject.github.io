---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN2 SCHEDULE CONSULT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN2 SCHEDULE CONSULT{:/}
 tag | {::nomarkdown}SCH{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Changes status of consult to \Scheduled\, optionally adding a comment andsending alerts.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Schedule consult and change status
 Leading comment lines | ORERR - return array for results/errors
ORIEN - IEN of consult from File 123
ORNP - Provider who Scheduled consult
ORDATE - Date/Time Consult was scheduled.
ORALRT - should alerts be sent to anyone?
ORALTO - array of alert recipient IENs
ORCOM is the comments array to be added
passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN in file 123.{:/} | 
| {::nomarkdown}Responsible provider{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}Date of action{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 
| {::nomarkdown}Send alerts?{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}Send alerts to{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\;\ separated list of alert recipients - pointers to file 200.{:/} | 
| {::nomarkdown}Comments{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Array of comments to be added with this action.{:/} | 




 Generated on January 13th 2017, 5:52:13 am