---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR PFFS LIST 

 property | value 
--- | --- 
 label | RMPR PFFS LIST
 tag | EN
 routine | [RMPRPFFS](http://code.osehra.org/dox/Routine_RMPRPFFS_source.html)
 return value type | GLOBAL ARRAY
 description | GUI REMOTE PROCEDURE, LIST NPPD DATA         ;RESULTS passed to broker in ^TMP($J,        ;delimited by \^\        ;piece 1 = ENTRY DATE        ;piece 2 = PATIENT NAME        ;piece 3 = PSAS HCPCS with * if hcpcs has Calculation Flag        ;piece 4 = QTY        ;piece 5 = VENDOR        ;piece 6 = INITIAL ACTION DATE        ;piece 7 = TOTAL COST        ;piece 8 = DESCRIPTION        ;piece 9 = INITIATOR        ;piece 10 = NPPD LINE BEFORE GROUPER        ;piece 11 = STATION        ;piece 12 = GROUPER NUMBER        ;piece 13 = FORM REQUESTED ON        ;piece 14 = TYPE OF TRANSACTION        ;piece 15 = SSN        ;piece 16 = IEN TO FILE 660        ;piece 17 = HCPCS SHORT DESCRIPTION        ;piece 18 = SOURCE

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATE1 | LITERAL | 50 | true | The Fileman date to start the query.  The begining date. | 
| DATE2 | LITERAL | 50 | true | The Fileman date to end the query.  The ending date. | 




Generated on January 11th 2017, 6:34:23 am