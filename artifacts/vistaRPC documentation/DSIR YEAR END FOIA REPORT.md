---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR YEAR END FOIA REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR YEAR END FOIA REPORT{:/}
 tag | {::nomarkdown}FOIA{:/}
 routine | [DSIROIR0](http://code.osehra.org/dox/Routine_DSIROIR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will collect the data for the year end FOIA report for VA Form0712.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The FileMan Format date to start the report.  Typically this will be October 1st of the previous year.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the end date for the report period.  Typically this will be September 30th of the current year.{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of internal division for the current user.multidivisional processing.{:/} | 
| {::nomarkdown}QUICK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}0 - Calculate the report and save the results if report for a fiscal year1 - Return the stored results of the report for a fiscal year2 - Return the combined stored results and user add ins for a fiscal year{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}