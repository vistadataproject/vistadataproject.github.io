---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORRHCQ QRYITR 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ QRYITR{:/}
 tag | {::nomarkdown}QRYITR{:/}
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Executes the query for a patient.  An iterator is passed in, in the format:   ListSource Subscript ^ DFN ^ Item# The value returned includes the records found and the next iterator:   PtSearched ^ RecordCount ^ ListSource Subscript ^ NextDFN ^ Next Item#{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORRITR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Iterator used to get the next patient in the query.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | QRYITR^[ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 Method comment | Do query for the current iterator
 First comment | {::nomarkdown}VAL=PtSearched^RecordsFound^Iterator{:/}
 Input parameters | {::nomarkdown}ORRITR{:/}
 Code | ```  S VAL=$$PTSCRN($P(ORRITR,";",2))<br/> I VAL S $P(VAL,U,2)=$$QRYPT($P(ORRITR,";",2))<br/> S $P(VAL,U,3)=$$NXTITER(ORRITR)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}