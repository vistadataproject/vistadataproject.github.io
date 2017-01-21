---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ GENERIC LISTER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ GENERIC LISTER{:/}
 tag | {::nomarkdown}LISTER{:/}
 routine | [YTQAPI2](http://code.osehra.org/dox/Routine_YTQAPI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a lists of all entries in a file for a specified field.  Input: FIELN: file or subfile Number       FIELD: filed number     optionals       FLAG: 'I' returns internal format, 'B' backwards sort              defaul= external, forward       NUMBER: number of entries requested default=500       FROM: last ien already retrieved  default= start       INDEX: index to sort on   default=  regular cross-ref on IEN Output: [DATA]        # of entries returned^#requested (often 500)^any more (0 or 1)        IEN^Data requested        .        .        IEN^Data requested{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}