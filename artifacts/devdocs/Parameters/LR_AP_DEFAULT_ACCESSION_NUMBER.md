---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; LR AP DEFAULT ACCESSION NUMBER
# LR AP DEFAULT ACCESSION NUMBER

When an Anatomic Pathology (AP) case is accessioned, this parameter will control how the system should assign a default accession number to the case being logged in. (Note: The user will still be able to override the default, and select a different accession number, if they so choose). &#x27;First Available Number&#x27; - The system will start searching from number one, and the first available accession number that is found in thataccession area will be used as the default accession number for the newcase being logged in. Choosing this method will minimize the likelihood ofhaving any gaps in the accession numbering, however, there is thepossibility that some accessions might be out of sequence. &#x27;Next Available Sequential Number&#x27; - The system will start searching from the last accession number that was logged in, and the next available number that is found in that accession area will be used as the default accession number for the new case being logged in. Choosing this method should better keep the accession numbers in sequence, but there is the possibility that some gaps in the numbering might be introduced. If no selection is made, the system will default to &#x27;First Available Number&#x27;.

Property | Value
--- | ---
ID | 769
Summary | Method of Assigning AP Accession Number
Value Type | set of codes
Value Domain | 1:First Available Number;2:Next Available Sequential Number
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}