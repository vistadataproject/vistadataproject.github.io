---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST LABORATORY TESTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST LABORATORY TESTS{:/}
 tag | {::nomarkdown}LABTLIST{:/}
 routine | [RORRP018](http://code.osehra.org/dox/Routine_RORRP018_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST LABORATORY TESTS remote procedure returns a list of laboratory tests (defined in the LABORATORY TEST file), which conform the criteria.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SUBSCR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}List of test subscripts separated by commas (internal values of the SUBSCRIPT field of the LABORATORY TEST file):   AU  Autopsy  BB  Blood Bank  CH  CHEM, HEM, TOX, SER, RIA, ETC.  CY  Cytology  EM  Electronic Microscopy  MI  Microbiology  SP  Surgical Pathology  WK  Workload  Only tests of the types defined by this parameter are selected by theremote procedure. By default ($G(SUBSCR)=\\), all tests are selected.{:/} | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The partial match restriction.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   P  Include panels (by default, the panels are     excluded from the list){:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The index entry(s) from which to begin the list  ^01: FromName  ^02: FromIEN  For example, a FROM value of \BI\ would list entries following BI. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.{:/} | 




 Generated on January 13th 2017, 5:52:13 am