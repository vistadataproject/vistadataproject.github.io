---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR REFORMAT REPORTS 

 property | value 
--- | --- 
 label | DSIR REFORMAT REPORTS
 tag | FRMTRPT
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will take a given report array and resize the length to fit into a smaller print area.  It takes into account header and footer lines and resizes the main body of the report.  It may return more pages than the input array.  Example: Report A is 60 lines with 3 lines of header and 2 lines of footer.  Report A has 50 lines of body.  Report A needs to print on a preprinted form that only allows for 40 lines of text.  Calling the RPC will return an 80 line array that will have lines 1 through 3 being header, lines 4 through 38 being text and lines 39 and 40 being footer.  Lines 41 through 43 will be copies of lines 1 through 3, lines 44 through 78 will be the remaining text with blank lines to fill to line 78 and lines 79 and 80 will be copies of lines 39 and 40.  If there are blank lines that can be removed from the bottom of the body to fit onto one page they will be removed so that the report will fit.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NEW REPORT LENGTH | LITERAL | 9 | true | This is the number of lines to format the old report into. | 
| HEADER COUNT | LITERAL | 9 | true | This is the number of line at the top of the report that are considered to be headers.  The RPC will always take the first x number of lines as header, this parameter is that x.   | 
| FOOTER COUNT | LITERAL | 9 | true | This parameter tells the RPC how many lines are footer text. | 
| OLD LINE COUNT | LITERAL | 9 | true | This parameter is needed for the RPC to know many lines per page are in the incoming report. | 
| INCOMING (OLD) REPORT | LIST |  | true | This is the array of the old report to be reformatted. | 




 ###### Generated on January 11th 2017, 6:39:43 am