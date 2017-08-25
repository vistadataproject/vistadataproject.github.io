---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; TIU USER CLASS FOR VBC<br/>
# TIU USER CLASS FOR VBC

This parameter identifies the User Class whose members should have VisibleBlack Character Line Counts reported for the TIU documents which they enter (e.g., Contract Transcriptionists). If defined, the TIU Billing Verification Report will include documentsentered by members of this class. If left undefined, the TIU BillingVerification Report will include any document entered by a person who isneither the author or expected cosigner (which could include in-housetranscriptionists, secretaries, technicians, or students, who&quot;ghost-write&quot; documents on behalf of licensed providers, who in turn mustreview/sign the content). If you discover that the Billing Verification Report at your station includes an unacceptable number of documents entered by users whose workshould not be included in the report, you can &quot;filter the noise&quot; by identifying a User Class using this parameter, and making sure that only the people whose work should be reported are added as members to that User Class.

## Properties

Property | Value
--- | ---
Summary | User Class for VBC Line Counts
Value Type | pointer
Value Domain | 8930
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}