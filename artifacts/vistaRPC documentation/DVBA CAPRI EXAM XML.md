---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBA CAPRI EXAM XML 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CAPRI EXAM XML{:/}
 tag | {::nomarkdown}FILEIN{:/}
 routine | [DVBAXML](http://code.osehra.org/dox/Routine_DVBAXML_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for the filling of the 2507 EXAM template in the XML version.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}EXAMIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}2507 Exam IEN{:/} | 
| {::nomarkdown}DAS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DAS is the XML DAS Conformation message{:/} | 
| {::nomarkdown}DATTIM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DATTIM is the XML Transmission Date/Time{:/} | 
| {::nomarkdown}XML{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}XML is the array list format of the template being stored{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}