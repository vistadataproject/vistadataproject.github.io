---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPR GET PATIENT DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPR GET PATIENT DATA{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VPRD](http://code.osehra.org/dox/Routine_VPRD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC retrieves the requested data from VistA, and returns it in^TMP(\VPR\,$J,n) as XML.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number from Patient file #2[optionally DFN;ICN for remote calls]{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The kind(s) of data to return, which may include:  demographics;reactions;problems;vitals;labs;meds;  immunizations;visits;appointments;documents;  procedures;consults{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time from which to begin searching for data [optional].{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time at which to end searching for data [optional].{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The maximum number of items to return per data type [optional].{:/} | 
| {::nomarkdown}ITEM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The identifier of a single item to return [optional, but TYPE mustalso be defined when used].{:/} | 
| {::nomarkdown}FILTER{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}List of name-value pairs, further refining the search.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}