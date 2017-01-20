---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RMPR NPPD LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RMPR NPPD LIST{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [RMPR9LNP](http://code.osehra.org/dox/Routine_RMPR9LNP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}GUI REMOTE PROCEDURE, LIST NPPD DATA         ;RESULTS passed to broker in ^TMP($J,        ;delimited by \^\        ;piece 1 = ENTRY DATE        ;piece 2 = PATIENT NAME        ;piece 3 = PSAS HCPCS with * if hcpcs has Calculation Flag        ;piece 4 = QTY        ;piece 5 = VENDOR        ;piece 6 = INITIAL ACTION DATE        ;piece 7 = TOTAL COST        ;piece 8 = DESCRIPTION        ;piece 9 = INITIATOR        ;piece 10 = NPPD LINE BEFORE GROUPER        ;piece 11 = STATION        ;piece 12 = GROUPER NUMBER        ;piece 13 = FORM REQUESTED ON        ;piece 14 = TYPE OF TRANSACTION        ;piece 15 = SSN        ;piece 16 = IEN TO FILE 660        ;piece 17 = HCPCS SHORT DESCRIPTION        ;piece 18 = SOURCE{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATE1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The Fileman date to start the query.  The begining date.{:/} | 
| {::nomarkdown}DATE2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The Fileman date to end the query.  The ending date.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}