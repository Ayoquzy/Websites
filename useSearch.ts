// 清空输入框工具函数：重置输入框并返回 false，便于统一处理后续流程
const clearInput = (input: HTMLInputElement): boolean => {
    input.value = "";
    return false;
};

/**
 * useSearch: 处理用户输入，根据不同格式执行跳转或搜索
 * @returns boolean - 始终返回 false，以阻止表单默认提交行为
 */
export function useSearch(): boolean {
    const elementInput = document.getElementById("search_input");
    if (!(elementInput instanceof HTMLInputElement)) {
        return false;
    }
    const input = elementInput;
    // 去除首尾空白字符
    const trimmed = elementInput.value.trim();
    if (!trimmed) {
        // 输入为空时，不做任何操作
        return false;
    }
    /** * useSearch.ts:20 Not allowed to load local resource:
        * 此段代码在服务器无法使用，因为浏览器的安全策略：任何在 http:// 或 https:// 上运行的网页，都被禁止跳转去加载 file:// 协议的本地资源。
        * 如果需要使用，请git clone 在本地运行*/
    /*
        // 本地文件路径（Windows 本地文件，如 "C:\path" 或 "C:/path"）
        if (/^[A-Za-z]:[\\\/].*!/.test(trimmed)) {
            window.location.href = `file:///${trimmed}`;
            clearInput(input);
            return false;
        }
    */
    let parsedUrl: URL;
    try {
        // 尝试直接解析（包含 http://、https://、ftp:// 等带协议的 URL）
        parsedUrl = new URL(trimmed);
    } catch {
        try {
            // 在默认 https:// 协议下解析（处理以 www. 或 域名 开头的情况）
            parsedUrl = new URL(trimmed, "https://");
        } catch {
            // 其它输入交给搜索引擎
            window.location.href = `https://cn.bing.com/search?q=${encodeURIComponent(trimmed)}`;
            return false;
        }
    }

    // 跳转到解析后的 URL
    window.location.href = parsedUrl.href;
    clearInput(input);
    return false;
}