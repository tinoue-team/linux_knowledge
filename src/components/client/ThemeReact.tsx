import mermaid from 'mermaid';
import { useEffect, useState } from 'preact/hooks';

export default function ThemeReact({ src }: { src: string }) {
    const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light');

    mermaid.initialize({ startOnLoad: true });

    useEffect(() => {
        // コールバック関数を定義
        const observerCallback: MutationCallback = (mutationsList: MutationRecord[]) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const newTheme = document.documentElement.dataset.theme;
                    setTheme(newTheme || 'light');
                }
            }
        };

        // MutationObserverを作成
        const observer = new MutationObserver(observerCallback);

        // オプションを設定して監視を開始(HTML ルート要素の属性の変更を監視)
        observer.observe(document.documentElement, { attributes: true });
        // mermaid.initialize({ startOnLoad: true });

        // クリーンアップ関数を返す(コンポーネントのアンマウント時に監視を停止: メモリーリーク対策)
        return () => {
            observer.disconnect();
        };
    }, []);

    const themedChart = `%%{init: {'theme':'${theme}'}}%%\n${src}`;

    return <pre class='mermaid'>{themedChart}</pre>;
}
