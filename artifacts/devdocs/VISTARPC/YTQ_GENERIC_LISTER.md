---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ GENERIC LISTER<br/>
# YTQ GENERIC LISTER

Returns a lists of all entries in a file for a specified field.  Input: FIELN: file or subfile Number       FIELD: filed number     optionals       FLAG: 'I' returns internal format, 'B' backwards sort              defaul= external, forward       NUMBER: number of entries requested default=500       FROM: last ien already retrieved  default= start       INDEX: index to sort on   default=  regular cross-ref on IEN Output: [DATA]        # of entries returned^#requested (often 500)^any more (0 or 1)        IEN^Data requested        .        .        IEN^Data requested

## Properties

Property | Value
--- | ---
Label | LISTER
MUMPS Implementation | [YTQAPI2](http://code.osehra.org/dox/Routine_YTQAPI2_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}