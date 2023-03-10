package io.github.kamalyes.algorithm.list;

import org.junit.jupiter.api.Assertions;

import java.util.List;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @see <a href="https://leetcode-cn.com/problems/merge-two-sorted-lists/">合并两个有序链表</a>
 * @since 2020-06-09
 */
public class 合并两个有序链表 {

    public static void main(String[] args) {
        ListNode head1 = ListUtil.buildList(1, 2, 4);
        ListNode head2 = ListUtil.buildList(1, 3, 4);
        ListNode result = mergeTwoLists(head1, head2);
        List<Integer> list = ListUtil.toList(result);
        System.out.println(list);
        Assertions.assertArrayEquals(new Integer[] { 1, 1, 2, 3, 4, 4 }, list.toArray(new Integer[0]));
    }

    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1);
        ListNode n = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                n.next = l1;
                l1 = l1.next;
            } else {
                n.next = l2;
                l2 = l2.next;
            }
            n = n.next;
        }

        n.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

}
