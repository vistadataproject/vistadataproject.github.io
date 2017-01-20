---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR FEES REC RPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR FEES REC RPT{:/}
 tag | {::nomarkdown}FEESREC{:/}
 routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC produces the data for the Fees Recieved report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The internal FileMan format date to start the report.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an optional date (FM format) to end the reporting period.  The default will be the current date the report is requested.{:/} | 
| {::nomarkdown}DIVISIONS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a variable '^' delimited containing selected Divisions from which the user may see data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}