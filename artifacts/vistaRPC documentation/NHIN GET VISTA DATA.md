---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NHIN GET VISTA DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NHIN GET VISTA DATA{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [NHINV](http://code.osehra.org/dox/Routine_NHINV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC retrieves the requested data from VistA, and returns it in^TMP($J,\NHINV\,n) as XML.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number from Patient file #2[optionally DFN;ICN for remote calls]{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The kind(s) of data to return, which may include:  patient;allergy;problem;vital;lab;med;xray;  consult;procedure;surgery;document;encounter{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time from which to begin searching for data [optional].{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time at which to end searching for data [optional].{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The maximum number of items to return per data type [optional].{:/} | 
| {::nomarkdown}ITEM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The identifier of a single item to return [optional, but TYPE mustalso be defined when used].{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}