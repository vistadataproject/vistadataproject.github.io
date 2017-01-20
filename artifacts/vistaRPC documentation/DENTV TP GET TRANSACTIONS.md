---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP GET TRANSACTIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP GET TRANSACTIONS{:/}
 tag | {::nomarkdown}TXN{:/}
 routine | [DENTVTP5](http://code.osehra.org/dox/Routine_DENTVTP5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns all of the Transaction type records from the Treatment Plan Transaction/Exam file (228.2) for a particular patient..{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the PATIENT file.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag (T, E, P, or S) indicates the type of records to retrieve.  T = transaction records  E = periodontal exams  P = periodontal screening & recording  S = soft tissue lesion If not passed, default value is T{:/} | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional date in Fileman format.   If passed only records greater than or equal to this date will be retrieved.  If not passed, default value is Jan 1, 2002{:/} | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional date in Fileman format.   If passed only records less than or equal to this date will be retrieved.  If not passed, default value is TODAY{:/} | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter will be the provider's record number (ien) to the NEW PERSON file (i.e., their DUZ value).   If passed, then only those records with that provider will be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}