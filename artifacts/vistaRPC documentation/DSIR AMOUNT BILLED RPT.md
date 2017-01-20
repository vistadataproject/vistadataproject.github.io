---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR AMOUNT BILLED RPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR AMOUNT BILLED RPT{:/}
 tag | {::nomarkdown}AMTBILD{:/}
 routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns the data for the Amount Billed report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Start Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in the FileMan format date to start the reporting period.{:/} | 
| {::nomarkdown}End Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass the FileMan format ending date for the reporting period.  This parameter will default to the current date.{:/} | 
| {::nomarkdown}Divisions{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a variable '^' delimited containing selected Divisions from whichthe user may see data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}